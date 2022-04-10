open Utils;
[@react.component]
let make = (~phase, ~value, ~onChange) =>
  <div>
    <label> {s(phase)} </label>
    <input
      type_="number"
      value={string_of_int(value)}
      onChange={e => e->ReactEvent.Form.target##value |> onChange}
    />
  </div>;
