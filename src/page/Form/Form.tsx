import { useContext } from "react";
import ScrollContext from "../../store/context";
import Card from "../../UI/Card";

const Form = () => {
  const scrollCtx = useContext(ScrollContext);
  const scroll = scrollCtx.scroll;

  return (
    <>
      {scroll && (
        <section>
          <Card>
            <form>
              <h2>Form</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              eius hic exercitationem ipsam distinctio, asperiores animi atque
              libero culpa similique, reiciendis delectus voluptate nihil
              voluptatem quisquam error, consequuntur velit qui.
            </form>
          </Card>
        </section>
      )}
    </>
  );
};

export default Form;
