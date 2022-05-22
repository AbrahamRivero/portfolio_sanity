// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//Documents
import works from './documents/works'
import workExperience from './documents/workExperience'
import testimonials from './documents/testimonials'
import brands from './documents/brands'
import abouts from './documents/abouts'
import experiences from './documents/experiences'
import skills from './documents/skills'
import contact from './documents/contact'

//Objects

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    works,
    workExperience,
    testimonials,
    brands,
    abouts,
    experiences,
    skills,
    contact
  ])
})
