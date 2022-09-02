<template>
  <div class="main-form m-4 p-4">
    <div class="basic-info">
      <h2 class="part-title">基本資料</h2>
      <div :class="['simple', { error: questions.basic.name.er }]">
        <label for="">
          {{ questions.basic.name.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <input type="text" v-model="questions.basic.name.an" />
      </div>
      <div
        :class="['single-select', { error: questions.basic.relationship.er }]"
      >
        <label for="">
          {{ questions.basic.relationship.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <div class="options">
          <div
            v-for="option in questions.basic.relationship.op"
            :key="option.v"
            class="option"
          >
            <input
              type="radio"
              v-model="questions.basic.relationship.an"
              :value="option.v"
              name="relationship"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="attendance">
      <h2 class="part-title">婚宴出席</h2>
      <div
        :class="['single-select', { error: questions.attendance.attend.er }]"
      >
        <label for="">
          {{ questions.attendance.attend.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <div class="options">
          <div
            v-for="option in questions.attendance.attend.op"
            :key="option.v"
            class="option"
          >
            <input
              type="radio"
              v-model="questions.attendance.attend.an"
              :value="option.v"
              name="attendance"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
      </div>
      <div :class="['simple', { error: questions.attendance.family.er }]">
        <label for="">
          {{ questions.attendance.family.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <input type="text" v-model="questions.attendance.family.an" />
      </div>
      <div :class="['simple', { error: questions.attendance.children.er }]">
        <label for="">
          {{ questions.attendance.children.qs }}
        </label>
        <input type="text" v-model="questions.attendance.children.an" />
      </div>
      <div :class="['single-select', { error: questions.attendance.food.er }]">
        <label for="">
          {{ questions.attendance.food.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <div class="options">
          <div
            v-for="option in questions.attendance.food.op"
            :key="option.v"
            class="option"
          >
            <input
              type="radio"
              v-model="questions.attendance.food.an"
              :value="option.v"
              name="food"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
        <p class="es">{{ questions.attendance.food.es }}</p>
      </div>
      <div :class="['simple', { error: questions.attendance.other.er }]">
        <label for="">
          {{ questions.attendance.other.qs }}
        </label>
        <input type="text" v-model="questions.attendance.other.an" />
      </div>
    </div>
    <div class="invitation">
      <h2 class="part-title">喜帖相關</h2>
      <div :class="['single-select', { error: questions.invitation.card.er }]">
        <label for="">
          {{ questions.invitation.card.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <div class="options">
          <div
            v-for="option in questions.invitation.card.op"
            :key="option.v"
            class="option"
          >
            <input
              type="radio"
              v-model="questions.invitation.card.an"
              :value="option.v"
              name="invitation"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
      </div>
      <div :class="['simple', { error: questions.invitation.tel.er }]">
        <label for="">
          {{ questions.invitation.tel.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <input type="text" v-model="questions.invitation.tel.an" />
      </div>
      <div :class="['simple', { error: questions.invitation.email.er }]">
        <label for="">
          {{ questions.invitation.email.qs }}
          <img
            v-show="questions.invitation.email.rq"
            :src="requiredIcon"
            alt=""
          />
        </label>
        <input type="text" v-model="questions.invitation.email.an" />
      </div>
      <div :class="['simple', { error: questions.invitation.address.er }]">
        <label for="">
          {{ questions.invitation.address.qs }}
          <img
            v-show="questions.invitation.address.rq"
            :src="requiredIcon"
            alt=""
          />
        </label>
        <input type="text" v-model="questions.invitation.address.an" />
      </div>
    </div>
    <div class="message-board">
      <h2 class="part-title">想說的話</h2>
      <div class="board">
        <textarea
          name=""
          id=""
          rows="10"
          :placeholder="questions.message.board.qs"
          v-model="questions.message.board.an"
        >
        </textarea>
      </div>
    </div>
    <div class="btn-wrapper">
      <button @click.prevent.stop="submitForm" class="submit-btn py-2 px-5">
        完成送出
      </button>
    </div>
  </div>
</template>

<script>
import { getQuestions } from "../compositions/formContent";
import { getWatchers } from "../compositions/watchers";

export default {
  name: "MainForm",
  setup() {
    const requiredIcon = require("../assets/images/pin.png");
    const { questions } = getQuestions();
    const { watch } = getWatchers(questions);
    const submitForm = () => {
      const formAnswer = {};
      let errCount = 0;
      for (let part in questions) {
        for (let question in questions[part]) {
          formAnswer[question] = questions[part][question].an;
          questions[part][question].er =
            questions[part][question].an === "" && questions[part][question].rq;
          errCount = questions[part][question].er ? errCount + 1 : errCount;
        }
      }
      console.log(errCount);
      console.log(formAnswer);
      //api here
    };

    return { requiredIcon, questions, submitForm, watch };
  }
};
</script>

<style lang="sass" scoped>
.main-form
  border: 1px solid $baby-blue
  border-radius: 5px
  .part-title
    padding-bottom: 1rem
    margin-bottom: 1rem
    border-bottom: .5px solid $baby-blue
    color: $luxury-gold
    &::after
      content: ''
      display: inline-block
      width: 25px
      height: 25px
      background-image: url('../assets/images/hot-balloon-blue-white.png')
      background-size: cover
      transform: translate(0, 5px) rotate(10deg)
  .simple
    @extend %input-style
  .single-select
    @extend %radio-style
  .message-board
    @extend %textarea-style
  .btn-wrapper
    text-align: end
    .submit-btn
      border: 1px solid $coral-pink
      border-radius: 5px
      transition: background .3s
      &:hover
        background: $coral-pink
</style>
