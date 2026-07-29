import {defineField, defineType} from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Certification',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'issuer', title: 'Issuer', type: 'string'}),
    defineField({
      name: 'issueDate',
      title: 'Issue Date',
      type: 'string',
      description: 'YYYY-MM',
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'string',
      description: 'YYYY-MM or No Expiry',
    }),
    defineField({
      name: 'credentialId',
      title: 'Credential ID',
      type: 'string',
    }),
    defineField({name: 'link', title: 'Verification Link', type: 'url'}),
  ],
})
