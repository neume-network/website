# website

This website is powered by [11ty](https://www.11ty.dev/).

## How to add blog posts?

1. Create a new file in the `src/posts` directory. You can use any [format supported by 11ty](https://www.11ty.dev/docs/languages/) including markdown.
2. Add the following mandatory frontmatter
   1. `date`: Publish date. For more information visit [11ty docs on date](https://www.11ty.dev/docs/dates/).
   1. `description`: A short description of the post useful for sharing links.
   1. `title`: Title of the post.
3. Add the following optional frontmatter
   1. `permalink`: This will be used as the URL of the post. If left blank the file name will be used.
   2. `tags`: Tags are useful for classifying posts into groups.
   3. `socialImage`: This is the image that will be used for social media sharing. If left blank the default image will be used.
4. Add the images to the `src/images` directory and reference it as `/images/<your-image>`

# licence
* see LICENCE file.
