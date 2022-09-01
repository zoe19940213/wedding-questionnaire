<template>
  <div class="main-form m-4 p-4">
    <div class="basic-info">
      <h2 class="part-title">基本資料</h2>
      <div class="simple">
        <label for="">
          {{ questions.basic.name.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <input
          type="text"
          v-model="questions.basic.name.an"
          :required="questions.basic.name.rq"
        />
      </div>
      <div class="single-select">
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
              :required="
                questions.basic.relationship.rq && option.v === 'groom'
              "
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="attendance">
      <h2 class="part-title">婚宴出席</h2>
      <div class="single-select">
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
              name="relationship"
              :required="questions.attendance.attend.rq && option.v === 'both'"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
      </div>
      <div class="simple">
        <label for="">
          {{ questions.attendance.family.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <input
          type="text"
          v-model="questions.attendance.family.an"
          :required="questions.attendance.family.rq"
        />
      </div>
      <div class="simple">
        <label for="">
          {{ questions.attendance.children.qs }}
        </label>
        <input
          type="text"
          v-model="questions.attendance.children.an"
          :required="questions.attendance.children.rq"
        />
      </div>
      <div class="single-select">
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
              name="relationship"
              :required="questions.attendance.food.rq && option.v === 'none'"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
        <p class="es">{{ questions.attendance.food.es }}</p>
      </div>
      <div class="simple">
        <label for="">
          {{ questions.attendance.other.qs }}
        </label>
        <input
          type="text"
          v-model="questions.attendance.other.an"
          :required="questions.attendance.other.rq"
        />
      </div>
    </div>
    <div class="invitation">
      <h2 class="part-title">喜帖相關</h2>
      <div class="single-select">
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
              name="relationship"
              :required="questions.invitation.card.rq && option.v === 'both'"
            />
            <label for="">{{ option.d }}</label>
          </div>
        </div>
      </div>
      <div class="simple">
        <label for="">
          {{ questions.invitation.tel.qs }}
          <img :src="requiredIcon" alt="" />
        </label>
        <input
          type="text"
          v-model="questions.invitation.tel.an"
          :required="questions.invitation.tel.rq"
        />
      </div>
      <div class="simple">
        <label for="">
          {{ questions.invitation.email.qs }}
          <img
            v-show="questions.invitation.email.rq"
            :src="requiredIcon"
            alt=""
          />
        </label>
        <input
          type="text"
          v-model="questions.invitation.email.an"
          :required="questions.invitation.email.rq"
        />
      </div>
      <div class="simple">
        <label for="">
          {{ questions.invitation.address.qs }}
          <img
            v-show="questions.invitation.address.rq"
            :src="requiredIcon"
            alt=""
          />
        </label>
        <input
          type="text"
          v-model="questions.invitation.address.an"
          :required="questions.invitation.address.rq"
        />
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
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "MainForm",
  setup() {
    const requiredIcon = require("../assets/images/pin.png");
    const questions = reactive({
      basic: {
        name: {
          qs: "請問你的名字是？",
          an: "",
          rq: true
        },
        relationship: {
          qs: "請問你和新人的關係是?",
          op: [
            { d: "男方親友", v: "groom" },
            { d: "女方親友", v: "bride" },
            { d: "共同朋友", v: "together" }
          ],
          an: "",
          rq: true
        }
      },
      attendance: {
        attend: {
          qs: "請問是否參與證婚/婚宴?",
          op: [
            { d: "全程參加", v: "both" },
            { d: "僅參與證婚", v: "ceremony" },
            { d: "僅參與婚宴", v: "banquet" },
            { d: "可惜皆無法參與", v: "not" }
          ],
          an: "",
          rq: true
        },
        family: {
          qs: "出席人數? (包含自己)",
          an: "",
          rq: true
        },
        children: {
          qs: "需要的兒童椅數量?",
          an: "",
          rq: false
        },
        food: {
          qs: "飲食習慣?",
          op: [
            { d: "無特別", v: "none" },
            { d: "全素", v: "vegan" },
            { d: "蛋奶素", v: "vegetarian" }
          ],
          an: "",
          es: "* 其他特殊飲食習慣因為是桌菜的關係無法滿足QQ",
          rq: false
        },
        other: {
          qs: "其他需求?",
          an: "",
          rq: false
        }
      },
      invitation: {
        card: {
          qs: "是否需要喜帖?",
          op: [
            { d: "實體喜帖", v: "physical" },
            { d: "電子喜帖", v: "digital" },
            { d: "我都想要!", v: "both" }
          ],
          an: "",
          rq: true
        },
        tel: {
          qs: "聯絡電話",
          an: "",
          rq: true
        },
        email: {
          qs: "Email",
          an: "",
          es: "需要電子喜帖者必填",
          rq: computed(
            () =>
              questions.invitation.card.an === "digital" ||
              questions.invitation.card.an === "both"
          )
        },
        address: {
          qs: "地址",
          an: "",
          es: "需要實體喜帖者必填",
          rq: computed(
            () =>
              questions.invitation.card.an === "physical" ||
              questions.invitation.card.an === "both"
          )
        }
      },
      message: {
        board: {
          qs: "祝福或任何想對我們說的都可以哦~",
          an: ""
        }
      }
    });
    const submitForm = () => {
      const formAnswer = {};
      for (let part in questions) {
        for (let question in questions[part]) {
          formAnswer[question] = questions[part][question].an;
        }
      }
      console.log(formAnswer);
      //api here
    };

    return { requiredIcon, questions, submitForm };
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
  .simple
    @extend %input-style
  .single-select
    @extend %radio-style
  .message-board
    @extend %textarea-style
</style>
