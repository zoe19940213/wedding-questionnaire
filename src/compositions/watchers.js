import { watch } from "@vue/runtime-core";

export function getWatchers(questions) {
  watch(
    () => questions.basic.name.an,
    (newValue) => {
      questions.basic.name.er = newValue === "";
    }
  );
  watch(
    () => questions.basic.relationship.an,
    (newValue) => {
      questions.basic.relationship.er = newValue === "";
    }
  );
  watch(
    () => questions.attendance.attend.an,
    (newValue) => {
      questions.attendance.attend.er = newValue === "";
    }
  );
  watch(
    () => questions.attendance.family.an,
    (newValue) => {
      questions.attendance.family.er = newValue === "";
    }
  );
  watch(
    () => questions.attendance.food.an,
    (newValue) => {
      questions.attendance.food.er = newValue === "";
    }
  );
  watch(
    () => questions.invitation.card.an,
    (newValue) => {
      questions.invitation.card.er = newValue === "";
    }
  );
  watch(
    () => questions.invitation.tel.an,
    (newValue) => {
      questions.invitation.tel.er = newValue === "";
    }
  );
  watch(
    () => questions.invitation.email.an,
    (newValue) => {
      questions.invitation.email.er =
        newValue === "" && questions.invitation.email.rq;
    }
  );
  watch(
    () => questions.invitation.address.an,
    (newValue) => {
      questions.invitation.address.er =
        newValue === "" && questions.invitation.address.rq;
    }
  );

  return { watch };
}
