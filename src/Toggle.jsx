import { useState } from "react";

function Toggle({ render }) {
  const [toggle, setToggle] = useState(false);

  return render(toggle, () => setToggle(!toggle));
}

export default Toggle;
