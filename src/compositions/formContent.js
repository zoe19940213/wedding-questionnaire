import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export function getQuestions() {
  const questions = reactive({
    basic: {
      name: {
        qs: "請問你的名字是？",
        an: "",
        rq: true,
        er: false
      },
      relationship: {
        qs: "請問你和新人的關係是?",
        op: [
          { d: "男方親友", v: "groom" },
          { d: "女方親友", v: "bride" },
          { d: "共同朋友", v: "together" }
        ],
        an: "",
        rq: true,
        er: false
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
        rq: true,
        er: false
      },
      family: {
        qs: "出席人數? (包含自己)",
        an: "",
        rq: true,
        er: false
      },
      children: {
        qs: "需要的兒童椅數量?",
        an: "",
        rq: false,
        er: false
      },
      food: {
        qs: "飲食習慣?",
        op: [
          { d: "無特別", v: "none" },
          { d: "全素", v: "vegan" },
          { d: "蛋奶素", v: "vegetarian" }
        ],
        es: "* 其他特殊飲食習慣因為是桌菜的關係無法滿足QQ",
        an: "",
        rq: true,
        er: false
      },
      other: {
        qs: "其他需求?",
        an: "",
        rq: false,
        er: false
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
        rq: true,
        er: false
      },
      tel: {
        qs: "聯絡電話",
        an: "",
        rq: true,
        er: false
      },
      email: {
        qs: "Email",
        es: "需要電子喜帖者必填",
        an: "",
        rq: computed(
          () =>
            questions.invitation.card.an === "digital" ||
            questions.invitation.card.an === "both"
        ),
        er: false
      },
      address: {
        qs: "地址",
        es: "需要實體喜帖者必填",
        an: "",
        rq: computed(
          () =>
            questions.invitation.card.an === "physical" ||
            questions.invitation.card.an === "both"
        ),
        er: false
      }
    },
    message: {
      board: {
        qs: "祝福或任何想對我們說的都可以哦~",
        an: "",
        rq: false,
        er: false
      }
    }
  });
  return { questions };
}
