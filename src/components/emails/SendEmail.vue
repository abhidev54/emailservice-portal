<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">To (Email)</label>
        <input
          type="text"
          class="form-control"
          id="to_email"
          required
          v-model="email.to_email"
          name="to_email"
        />
      </div>
      <div class="form-group">
        <label for="title">To (Name)</label>
        <input
          type="text"
          class="form-control"
          id="to_name"
          required
          v-model="email.to_name"
          name="to_name"
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
      <a href="/sendemail">Send New email</a>
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
        to_email: this.email.to_email,
        to_name: this.email.to_name,
        from_email: this.email.from_email,
        from_name: this.email.from_name,
        subject: this.email.subject,
        body: this.email.message,
      };

      EmailDataService.create(data)
        .then(response => {
          console.log(response);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);alert(e);
        });
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