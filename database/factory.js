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

Factory.blueprint('App/Models/Startup', (faker, index, data) => {
  console.log(faker);
  const defaultValue = {
    name: faker.company(),
    description: faker.paragraph({ sentences: 2}),
    url: faker.url(),
    logo_url: faker.avatar({ protocol: 'https'}),
    user_id: data.user_id,
    approved: true,
  }
  return Object.assign(defaultValue, data)
})

