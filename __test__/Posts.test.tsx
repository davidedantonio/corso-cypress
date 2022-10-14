import { render, screen } from "@testing-library/react";
import Posts from "../app/routes/posts/Posts";

describe("<Posts />", () => {
  it("should render the posts", () => {
    render(
      <Posts list={[
        { id: 1, title: "foo", body: "bar" },
      ]} />
    );

    screen.getByText("bar");
  });
})