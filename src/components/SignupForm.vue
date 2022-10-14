<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          >
          <v-text-field v-for="input in inputs"
            :key="label"
            :v-model="input.vmodel"
            :label="input.label"
            :type="input.type"
            :suffix="input.suffix"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
            color="primary"
            text
            @click="submit"
          >
            signup
          </v-btn>
          <v-btn
            color="primary"
            text
            to="/login"
          >
            Login
          </v-btn>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    name: 'SignupForm',

    data: () => ({
      
      inputs:
       [ 
        {
          label: 'name & surname',
          href: 'https://github.com/vuetifyjs/vuetify',
          vmodel: 'fullname',
          type: "text",
          suffix: "",
          existingUser: false
        },
        {
          label: 'email',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
          vmodel: 'email',
          type: "email",
          suffix: "",
          existingUser: true
        },
        {
          label: 'phone No.',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
          vmodel: 'email',
          type: "number",
          suffix: "",
          existingUser: false
        },
        {
          label: 'password',
          href: 'https://github.com/vuetifyjs/vuetify',
          vmodel: 'password',
          type: "password",
          suffix: "",
          existingUser: false
        },
        {
          label: 'repeat password',
          href: 'https://github.com/vuetifyjs/vuetify',
          vmodel: 'repeat-password',
          type: "password",
          suffix: "",
          existingUser: true
        },
      ],
    }),
  }
</script>
