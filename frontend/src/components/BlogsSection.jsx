import React from "react";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        author="John Doe"
        title="How to Create a Responsive Layout"
        overview="Learn the best practices for creating responsive layouts in web design."
      />
      <BlogCard
        author="Jane Smith"
        title="Understanding React Hooks"
        overview="A comprehensive guide to using hooks in React for better state management."
      />
      <BlogCard
        author="Alice Johnson"
        title="CSS Grid vs Flexbox"
        overview="Explore the differences between CSS Grid and Flexbox and when to use each."
      />
      <BlogCard
        author="John Doe"
        title="How to Create a Responsive Layout"
        overview="Learn the best practices for creating responsive layouts in web design."
      />
      <BlogCard
        author="Jane Smith"
        title="Understanding React Hooks"
        overview="A comprehensive guide to using hooks in React for better state management."
      />
      <BlogCard
        author="Alice Johnson"
        title="CSS Grid vs Flexbox"
        overview="Explore the differences between CSS Grid and Flexbox and when to use each."
      />
      <BlogCard
        author="Alice Johnson"
        title="CSS Grid vs Flexbox"
        overview="Explore the differences between CSS Grid and Flexbox and when to use each."
      />
    </div>
  );
};

export default BlogsSection;
