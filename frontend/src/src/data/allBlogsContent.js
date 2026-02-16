/**
 * Complete Blog Content System
 * Imports optimized blogs and provides merge functionality
 */

import { optimizedBlogs, allSeoBlogs } from "./blogContent";
import { blogPosts } from "../mockData";

// Merge optimized blogs with existing blogPosts
// This replaces blogs 2-7 with SEO-optimized versions and includes all new SEO blogs
export const getAllBlogs = () => {
  // Keep blog 1 as is, replace 2-7 with optimized versions
  const blog1 = blogPosts.find(b => b.id === 1);
  const optimizedBlogsMap = new Map(optimizedBlogs.map(b => [b.id, b]));
  
  // Merge: use optimized versions for 2-7, keep original for others
  const mergedBlogs = blogPosts.map(blog => {
    if (optimizedBlogsMap.has(blog.id)) {
      return optimizedBlogsMap.get(blog.id);
    }
    return blog;
  });
  
  // Add all new SEO blogs (8+) that don't exist in blogPosts
  const existingIds = new Set(mergedBlogs.map(b => b.id));
  const newBlogs = allSeoBlogs.filter(b => !existingIds.has(b.id));
  
  // Combine all blogs: existing (with optimized 2-7) + new SEO blogs
  return [...mergedBlogs, ...newBlogs];
};

// Export for use in components
export default getAllBlogs;
