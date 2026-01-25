import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Resume',

  projectId: 'q0x7dbrn',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  schema: schema,
})
