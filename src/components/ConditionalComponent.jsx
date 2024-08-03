import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;
  return display ? <Welcome /> : <Code />;
}
