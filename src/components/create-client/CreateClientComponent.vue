<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Cliente</h3>
      </div>
      <div class="card-body">
      <form @submit.prevent="createNewClient">
        <div class="form-group">
          <label class="font-weight-bold" for="client-name">Nome</label>
          <input type="text"
                  class="form-control"
                  placeholder="Digite o nome do cliente"
                  v-model="client.name">
        </div>

        <div class="form-group">
          <label class="font-weight-bold" for="client-address">Endereço</label>
          <input type="text"
                  class="form-control"
                  placeholder="Digite o endereço do cliente"
                  v-model="client.address">
        </div>

        <div class="form-group">
          <label class="font-weight-bold" for="cliente-telephone-number">Telefone</label>
          <input type="number"
                  class="form-control"
                  placeholder="Digite o nome do cliente"
                  v-model="client.telephoneNumber">
        </div>

        <div class="form-group">
          <label for="relatives-select" class="font-weight-bold">Possui dependentes</label>
          <select class="form-control" id="RelativesSelect" v-model="client.hasRelatives">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div class="form-group">
          <label class="font-weight-bold" for="relatives-name">Nome</label>
          <input type="text"
                  class="form-control"
                  placeholder="Digite o nome do dependente"
                  v-model="client.relatives.name">
        </div>

        <div class="form-group">
          <label class="font-weight-bold" for="relatives-age">Idade</label>
          <input type="number"
                  class="form-control"
                  placeholder="Digite a idade do dependente"
                  v-model="client.relatives.age">
        </div>

        <div class="form-group">
          <label for="relationship-select" class="font-weight-bold">Grau de parentesco</label>
          <select class="form-control"
                  id="RelationshipSelect"
                  v-model="client.relatives.relationship">
            <option>Esposa(o)</option>
            <option>Filha(o)</option>
          </select>
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
export default {
  name: 'CreateClientComponent',
  data() {
    return {
      client: {
        name: '',
        address: '',
        telephoneNumber: '',
        hasRelatives: '',
        relatives: {
          name: '',
          age: '',
          relationship: '',
        },
      },
      methods: {
        handleSubmitForm() {},
      },
    };
  },
};
</script>
