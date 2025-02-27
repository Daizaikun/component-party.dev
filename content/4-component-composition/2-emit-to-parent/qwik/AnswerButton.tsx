import { component$, PropFunction } from "@builder.io/qwik";

type Props = {
  onYes$: PropFunction<() => void>;
  onNo$: PropFunction<() => void>;
};

export const AnswerButton = component$<Props>((props) => {
  return (
    <>
      <button onClick$={props.onYes$}>YES</button>

      <button onClick$={props.onNo$}>NO</button>
    </>
  );
});
