<template>
  <div class="home">
    <h1>New Actor</h1>
      <div>
        First Name: <input type="text" v-model="newActorFirstName" />
        Last Name: <input type="text" v-model="newActorLastName" />
        Known For: <input type="text" v-model="newActorKnownFor" />
        Gender: <input type="text" v-model="newActorGender" />
        Age: <input type="text" v-model="newActorAge" />
      </div>
    <h1>All Actors</h1>
    <div v-for="actor in actors">
      <h2>{{ actor.first_name }} {{ actor.last_name }}</h2>      
      <button v-on:click="showActor(actor)">Show more</button>
      <div v-if="currentActor === actor">
        <h3>Known for: {{ actor.known_for }}</h3>
        <h4>Gender: {{actor.gender}}</h4>
        <h5>Age: {{actor.age}} </h5>
        <div>
          First Name: <input type="text" v-model="actor.first_name" />
          Last Name: <input type="text" v-model="actor.last_name" />
          Known For: <input type="text" v-model="actor.known_for" />
          Gender: <input type="text" v-model="actor.gender" />
          Age: <input type="text" v-model="actor.age" />
          <button v-on:click="updateActor(actor)">Update Actor</button>
          <button v-on:click="destroyActor(actor)">Destroy Actor</button>
        </div>
      </div>
    </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      actors: [],
      currentActor: {},
      newActorFirstName: "",
      newActorLastName: "",
      newActorKnownFor: "",
      newActorGender: "",
      newActorAge: ""
    };
  },
  created: function() {
    axios.get("/api/actors").then(response => {
      this.actors = response.data;
    });
  },
  methods: {
    newActor: function() {
      var params = {
        first_name: this.newActorFirstName,
        last_name: this.newActorLastName,
        known_for: this.newActorKnownFor,
        gender: this.newActorGender,
        age: this.newActorAge
      };
      axios.post("/api/actors", params).then(response => {
        this.actors.push(response.data);
        this.newActorFirstName = "";
        this.newActorLastName = "";
        this.newActorKnownFor = "";
        this.newActorGender = "";
        this.newActorAge = "";
      });
    },
    showActor: function(actor) {
      if (this.currentActor === actor) {
        this.currentActor = {};
      } else {
        this.currentActor = actor;
      }
    },
    updateActor: function(actor) {
      var params = {
        first_name: actor.first_name,
        last_name: actor.last_name,
        known_for: actor.known_for,
        gender: actor.gender,
        age: actor.age
      };
      axios
      .patch("/api/actors" + actor.id, params)
      .then(response => {
        this.currentActor = {};
      });
    },
    destroyActor: function(actor) {
      axios
        .delete("/api/actors/" + actor.id)
        .then(response => {
          var index = this.actors.indexOf(actor);
          this.actors.splice(index, 1);
        });
    }

  }
};
</script>