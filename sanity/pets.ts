// schemas/pet.js
export default {
  name: 'pets',
  type: 'document',
	title: 'Pets',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age'
    }
  ]
}