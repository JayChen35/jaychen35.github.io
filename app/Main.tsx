import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import AuthorLayout from '@/layouts/AuthorLayout'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hi there!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
      </div>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
