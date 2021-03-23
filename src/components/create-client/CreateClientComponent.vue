<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Cliente</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <div class="form-group">
            <label class="font-weight-bold" for="client-name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Digite o nome do cliente"
              v-model="client.name"
              :class="{ 'is-invalid': isSubmitted && $v.client.name.$error }"
            />
            <div v-if="isSubmitted && !$v.client.name.required" class="invalid-feedback">
              Nome do cliente não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="client-address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              class="form-control"
              placeholder="Digite o endereço do cliente"
              v-model="client.address"
              :class="{ 'is-invalid': isSubmitted && $v.client.address.$error }"
            />
            <div v-if="isSubmitted && !$v.client.address.required" class="invalid-feedback">
              Endereço do cliente não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="cliente-telephone-number">Telefone</label>
            <input
              type="number"
              id="telephone_number"
              name="telephone_number"
              class="form-control"
              placeholder="Digite o telefone do cliente com código do estado"
              v-model="client.telephone_number"
              :class="{ 'is-invalid': isSubmitted && $v.client.telephone_number.$error }"
            />
            <div
              v-if="isSubmitted && !$v.client.telephone_number.required"
              class="invalid-feedback"
            >
              Número de telefone do cliente não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <label for="relatives-select" class="font-weight-bold">Possui dependentes</label>
            <select
              class="form-control"
              id="has_relatives"
              name="has_relatives"
              v-model="client.has_relatives"
              :class="{ 'is-invalid': isSubmitted && $v.client.has_relatives.$error }"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
            <div v-if="isSubmitted && !$v.client.has_relatives.required" class="invalid-feedback">
              Este campo não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="relatives-name">Nome</label>
            <input
              type="text"
              id="relatives_name"
              name="relatives_name"
              class="form-control"
              placeholder="Digite o nome do dependente"
              v-model="client.relatives.relatives_name"
              :class="{ 'is-invalid': isSubmitted && $v.client.relatives.relatives_name.$error }"
            />
            <div v-if="isSubmitted && !$v.client.relatives.relatives_name.required"
                  class="invalid-feedback">
              Nome do dependente do cliente não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold" for="relatives-age">Idade</label>
            <input
              type="number"
              id="relatives_age"
              name="relatives_age"
              class="form-control"
              placeholder="Digite a idade do dependente"
              v-model="client.relatives.relatives_age"
              :class="{ 'is-invalid': isSubmitted && $v.client.relatives.relatives_age.$error }"
            />
            <div v-if="isSubmitted && !$v.client.relatives.relatives_age.required"
                  class="invalid-feedback">
              Idade do dependente do cliente não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <label for="relationship-select" class="font-weight-bold">Grau de parentesco</label>
            <select
              class="form-control"
              id="relatives_relationship"
              name="relatives_relationship"
              v-model="client.relatives.relatives_relationship"
              :class="{ 'is-invalid': isSubmitted
                        && $v.client.relatives.relatives_relationship.$error }"
            >
              <option>Esposa(o)</option>
              <option>Filha(o)</option>
            </select>
            <div
              v-if="isSubmitted && !$v.client.relatives.relatives_relationship.required"
              class="invalid-feedback"
            >
              Grau de parentesco do dependente do cliente não pode estar vazio!
            </div>
          </div>

          <div class="form-group">
            <button class="btn btn-primary" type="submit">Adicionar Cliente</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required, maxLength, between } from 'vuelidate/lib/validators';

export default {
  name: 'CreateClientComponent',
  data() {
    return {
      client: {
        name: '',
        address: '',
        telephone_number: '',
        has_relatives: '',
        relatives: {
          relatives_name: '',
          relatives_age: '',
          relatives_relationship: '',
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
    handleSubmitForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        // eslint-disable-next-line no-useless-return
        return;
      }
    },
  },
};
</script>
