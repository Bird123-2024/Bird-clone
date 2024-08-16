import type { Metadata, NextPage } from 'next'
import TableDocs from '.'
import { DocsContentLayout } from '../../../components/DocsContentLayout'
import EditPage from '../../../components/EditPage'

export const metadata: Metadata = {
  description:
    'A Table Component is a fundamental user interface element used to present data in a structured and organized format. Tables consist of rows and columns, with each row representing a data entry and each column representing a specific attribute or field. Tables are commonly used to display tabular data, such as lists, grids, or datasets, making information easier to comprehend and compare.',
  title: 'Table - Keep React',
}

const page: NextPage = () => {
  return (
    <DocsContentLayout description={`${metadata.description}`} title={`${metadata.title}`}>
      <TableDocs />
      <EditPage pageLink="/docs/components/table" nextPageLink="/docs/components/tabs" nextPageName="Tabs" />
    </DocsContentLayout>
  )
}

export default page
