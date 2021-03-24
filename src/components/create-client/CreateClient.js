import { required, maxLength, between } from 'vuelidate/lib/validators';
import ClientService from '../../services/ClientService';

export default {
  name: 'CreateClientComponent',
  data() {
    return {
      client: {
        name: null,
        address: null,
        telephone_number: null,
        has_relatives: null,
        relatives: {
          relatives_name: null,
          relatives_age: null,
          relatives_relationship: null,
        },
      },
      isSubmitted: false,
    };
  },
  validations: {
    client: {
      name: {
        required,
        maxLength: maxLength(20),
      },
      address: {
        required,
        maxLength: maxLength(50),
      },
      telephone_number: {
        required,
      },
      has_relatives: {
        required,
      },
      relatives: {
        relatives_name: {
          required,
        },
        relatives_age: {
          required,
          between: between(0, 110),
        },
        relatives_relationship: {
          required,
        },
      },
    },
  },
  methods: {
    handleSubmitForm() {},

    async submitNewClient() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal('Oops!', 'Você precisa preencher todos os campos', 'error');
          return;
        }

        await ClientService.createNewClient(this.client);
        this.$swal({
          title: 'Cliente adicionado com sucesso!',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false,
          allowEnterKey: true,
          allowEscapeKey: false,
        // eslint-disable-next-line no-unused-vars
        }).then((data) => {
          this.$router.push({
            name: 'list',
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
