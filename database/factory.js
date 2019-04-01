const Factory = use('Factory')

Factory.blueprint('Adonis/Acl/Role', (faker, index, data) => {
  const defaultValue = {
    slug: 'administrator',
    name: 'Administrator'
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/User', (faker, index, data) => {
  const defaultValue = {
    username: faker.username(),
    email: faker.email(),
    password: 'secret',
  }

  return Object.assign(defaultValue, data)
})

Factory.blueprint('App/Models/Post', (faker) => {
  return {
    title: faker.sentence(),
    body: faker.paragraph(),
    user_id: async () => {
      return (await Factory.model('App/Models/User').create()).id
    }
  }
})