import React from "react";
import { Textarea } from ".";
import { render, fireEvent } from "@testing-library/react";

describe("Testing Textarea", () => {
  it("Match Snapshot", () => {
    const { asFragment } = render(
      <Textarea aria-label="text-area" value="lorem ispum" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Fire change event", () => {
    const { getByLabelText } = render(<Textarea aria-label="textarea" />);
    const element = getByLabelText("textarea") as HTMLTextAreaElement;

    fireEvent.change(element, { target: { value: "Hello World!" } });
    expect(element.value).toBe("Hello World!");

    fireEvent.change(element, { target: { value: "#$dada123sda';.///`11`1" } });
    expect(element.value).toBe("#$dada123sda';.///`11`1");

    fireEvent.change(element, { target: { value: veryLongText } });
    expect(element.value).toBe(veryLongText);
  });

  it("Check defalut value", () => {
    const { getByLabelText } = render(
      <Textarea aria-label="textarea" defaultValue="defalut value" />
    );
    const element = getByLabelText("textarea") as HTMLTextAreaElement;

    expect(element.value).toBe("defalut value");

    fireEvent.change(element, { target: { value: veryLongText } });
    expect(element.value).toBe(veryLongText);
  });

  it("Check fixed value", () => {
    const { getByLabelText } = render(
      <Textarea aria-label="textarea" value="lorem" />
    );
    const element = getByLabelText("textarea") as HTMLTextAreaElement;

    expect(element.value).toBe("lorem");

    fireEvent.change(element, { target: { value: "" } });
    expect(element.value).toBe("lorem");

    fireEvent.change(element, { target: { value: veryLongText } });
    expect(element.value).toBe("lorem");
  });

  it("Check onChange event", () => {
    const text = "lorem ipsum dolor";
    const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      expect(e.target.value).toBe(text);
    };

    const { getByLabelText } = render(
      <Textarea aria-label="textarea" onChange={onInputChange} />
    );
    const element = getByLabelText("textarea") as HTMLTextAreaElement;

    fireEvent.change(element, { target: { value: text } });
    expect(element.value).toBe(text);
  });
});

const veryLongText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque ipsam eius quaerat fugit praesentium itaque, et molestias dolorum laborum labore neque odit accusantium laudantium possimus reiciendis, officia, consectetur excepturi voluptate. Esse, laborum adipisci, voluptatibus asperiores quibusdam assumenda, numquam eum consequuntur deserunt veniam aut consectetur commodi earum dolore aspernatur quod blanditiis provident officiis dolor vero ab maxime totam! Atque quaerat omnis, consequatur impedit laboriosam ipsam eius! Mollitia officia ipsum nesciunt itaque omnis nulla. Vel inventore vitae cumque, perferendis fugiat, soluta eius magni magnam similique iste dolor repudiandae aliquam qui quae natus. Corrupti ex nihil amet quaerat illum quasi aspernatur numquam nostrum culpa? Consectetur ullam totam quaerat asperiores dolor amet minus ipsum ab excepturi nostrum illo velit omnis nihil cumque, aliquid minima libero magnam nemo. Ullam placeat distinctio omnis praesentium similique aliquam, ea eaque laboriosam ducimus vel, nam, pariatur tenetur tempore modi dolore magnam. Est a laborum blanditiis minus ab officiis corporis, sint repellendus et nemo ipsum voluptatem rerum itaque labore culpa velit architecto mollitia! Incidunt tempora sit maxime accusantium molestiae! Eligendi totam modi assumenda! Nemo exercitationem eaque dolores repellat eligendi optio non voluptatem dolorum, praesentium ratione illum a ab dolorem laboriosam architecto! Error ipsa repudiandae, nam tenetur deserunt est sint non similique adipisci esse reiciendis ut autem temporibus id minima aut dolore doloremque nemo nostrum blanditiis laboriosam suscipit quisquam. Reprehenderit voluptatum temporibus dolores laudantium enim esse, ullam voluptate! Quaerat, quod nihil? Quo, illo obcaecati voluptates incidunt modi eveniet saepe natus officia quae sunt facilis autem voluptatum? Magni nulla non nihil, unde pariatur harum consectetur enim qui. Aliquam provident eius accusamus debitis libero quae doloremque praesentium minima. Praesentium voluptatum error quisquam beatae hic neque quidem quae itaque ducimus dicta repudiandae voluptas, mollitia nemo iure rerum iste laudantium voluptate illo ab in cum soluta ipsum! Totam optio deserunt voluptatibus distinctio ducimus illo perferendis. Earum corrupti natus quod quas voluptas. Nesciunt iure praesentium est unde fugiat quos dolores fugit neque, incidunt optio suscipit tenetur voluptas ea laudantium eaque exercitationem quas quidem atque a amet debitis? Suscipit sed iste mollitia optio sint deleniti, iure laborum ipsam nostrum nesciunt est neque culpa exercitationem fuga maiores ullam dolorem perspiciatis adipisci, minus laboriosam ducimus reprehenderit? Ratione atque repellendus ducimus iure excepturi rem deserunt vel illo quas voluptatem porro molestiae hic voluptates, nesciunt quae. Incidunt expedita nemo cupiditate, corporis, aliquam numquam voluptates magni, saepe sed necessitatibus quo quas quae eum cumque porro iste ratione! Esse veritatis molestiae sequi? Exercitationem in rerum adipisci aspernatur autem iusto nobis maiores? Odio neque voluptas illum quasi vel, doloremque accusantium laudantium! Omnis tempora dignissimos, nesciunt ipsum ea ut repellendus esse culpa totam, dolore ad sunt. At officiis minima quam doloribus a inventore neque vel dolor dolorum laudantium error fugiat esse amet quis fugit ullam, modi reiciendis voluptatibus quibusdam. Aliquam temporibus, laudantium a dolores explicabo sapiente tenetur doloribus ratione labore eaque ab nobis quos deserunt, omnis quidem perferendis quisquam iste! Id ad consequatur dolor iusto accusantium vitae dolorem voluptas porro itaque, minima molestiae ipsum, assumenda eveniet illum ut distinctio minus. Laboriosam fuga excepturi officia.";
