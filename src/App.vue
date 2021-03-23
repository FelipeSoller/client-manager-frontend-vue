<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand order-md-last">Gerenciador de clientes</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to='/'>Lista de clientes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/client-create'>Adicionar clientes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/client-update'>Atualizar clientes</router-link>
          </li>
        </ul>
    </nav>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>
