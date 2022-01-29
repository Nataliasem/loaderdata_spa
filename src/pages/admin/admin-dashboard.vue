<template>
  <div>Панель администратора</div>
  <div>{{ users }}</div>
</template>

<script>
import usersApi from '../../api/users.js'

export default {
  name: 'admin-dashboard',
  middleware: ['auth', 'admin'],
  data: () => ({
    users: []
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      usersApi.loadUsers()
          .then(users => this.users = users)
          .catch(error => console.log(error))
    }
  }
}
</script>
