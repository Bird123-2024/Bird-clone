import type { Metadata, NextPage } from 'next'
import RatingDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'The Rating Component in the Keep React allows users to provide ratings for various items or content. It provides a visual representation of the rating using a set of stars or other symbols. With customizable options for the rating status, you can create rating components that accurately reflect user feedback.',
  title: 'Rating - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <RatingDocs />
      <EditPage pageLink="/docs/components/rating" nextPageLink="/docs/components/sidebar" nextPageName="Sidebar" />
    </DocsContentLayout>
  )
}

export default page
