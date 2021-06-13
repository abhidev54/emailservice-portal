<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
      </div>
    </div>
    <div class="col-md-6">
      <h2>Email History</h2>

      <table class="vuetable">
        <tr>
            <th>Job Id</th>
            <th>To</th>
            <th>From</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Status</th>
            <th>Last Updated</th>
        </tr>
        <tr v-for = "(email_history, index) in history" :key = "index">
            <td>{{ email_history.job_id}} </td>
            <td>{{ email_history.to_email}} </td>
            <td>{{ email_history.from_email}} </td>
            <td>{{ email_history.subject}} </td>
            <td>{{ email_history.body}} </td>
            <td>{{ email_history.status}} </td>
            <td>{{ email_history.updated_at}} </td>
        </tr>
     </table>
    </div>
  </div>
</template>

<script>
import EmailDataService from "../../services/EmailDataService";

export default {
  name: "history-list",
  data() {
    return {
      history: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveHistory() {
      EmailDataService.getAll()
        .then(response => {
          this.history = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveHistory();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    }
  },
  mounted() {
    this.retrieveHistory();
  }
};
</script>

<style>
table {
	border-top: 1px solid #ddd;
	border-collapse: collapse;
	border-spacing: 0;
	width: 100%;
}
	thead td {
		background-color: #E1E7EE;
	}
	th, td {
		border-bottom: 1px solid #c6c6c6;
		line-height: 1.2;
		text-align: left;
		padding: 0.5rem;
	}
	th {
		background: #F5F7Fb;
		font-size: 0.8em;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
</style>