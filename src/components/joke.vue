<template>
<button data-testid="joke__button-generate-joke">Générer la blague</button>
  <p data-testid="joke__question">{{joke?.setup}}</p>
  <p data-testid="joke__answer">{{joke?.delivery}}</p>
</template>
<script setup lang="ts">
import {useJoke} from "@/composables/UseJoke";
import {ref} from "vue";
import type {JokeDto} from "@/model/jokeDto";

const joke = ref<JokeDto>();

useJoke().getJoke().then((reponse: JokeDto) => joke.value = reponse);

</script>