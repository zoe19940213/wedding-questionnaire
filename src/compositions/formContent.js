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
        op: ["男方親友", "女方親友", "共同朋友"],
        an: "",
        rq: true,
        er: false
      }
    },
    attendance: {
      attend: {
        qs: "請問是否參與證婚/婚宴?",
        op: ["全程參加", "僅參與證婚", "僅參與婚宴", "可惜皆無法參與"],
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
        op: ["無特別", "全素", "蛋奶素"],
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
        op: ["實體喜帖", "電子喜帖", "我都想要!"],
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
            questions.invitation.card.an === "電子喜帖" ||
            questions.invitation.card.an === "我都想要!"
        ),
        er: false
      },
      address: {
        qs: "地址",
        es: "需要實體喜帖者必填",
        an: "",
        rq: computed(
          () =>
            questions.invitation.card.an === "實體喜帖" ||
            questions.invitation.card.an === "我都想要!"
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
