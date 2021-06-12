<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">To</label>
        <input
          type="text"
          class="form-control"
          id="to"
          required
          v-model="email.to"
          name="to"
        />
      </div>

      <div class="form-group">
        <label for="from_email">From (Email)</label>
        <input
          type="text"
          class="form-control"
          id="from_email"
          required
          v-model="email.from_email"
          name="from_email"
        />
      </div>

      <div class="form-group">
        <label for="from_name">From (Name)</label>
        <input
          type="text"
          class="form-control"
          id="from_name"
          required
          v-model="email.from_name"
          name="from_name"
        />
      </div>

      <div class="form-group">
        <label for="from_name">Subject</label>
        <input
          type="text"
          class="form-control"
          id="subject"
          required
          v-model="email.subject"
          name="subject"
        />
      </div>

      <div class="form-group">
        <label for="message">Email Content/Body</label>
        <textarea
          class="form-control"
          id="message"
          required
          v-model="email.message"
          name="message"
        ></textarea>
      </div>

      <button @click="sendEmail" class="btn btn-success">Send</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button @click="sendEmail" class="btn btn-success">Send</button>
    </div>
  </div>
</template>
<script>
import EmailDataService from "../../services/EmailDataService";

export default {
  name: "send-email",
  data() {
    return {
      email: {
        id: null,
        to: "",
        from_email: "",
        from_name: "",
        subject: "",
        message: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    sendEmail() {
      var data = {
        to: this.email.to,
        from_email: this.email.from_email,
        from_name: this.email.from_name,
        subject: this.email.subject,
        message: this.email.message,
      };

      EmailDataService.create(data)
        .then(response => {
          this.email.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);alert(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.email = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>