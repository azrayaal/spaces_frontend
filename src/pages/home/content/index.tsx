import ContentSpace from "../../../components/content";
import PostInput from "../../../components/postInput";

const ContentDummy = [
  {
    avatar: "https://source.unsplash.com/uFCmJ6fiWGY",
    profileName: "Kay-O",
    userName: "ky0",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit maiores atque tenetur.",
    image_content: "https://source.unsplash.com/7z9ByavTdH8",
    datePost: 12,
    likes: 24,
    replies: 1,
  },
  {
    avatar: "https://source.unsplash.com/4JL_VAgxwcU",

    profileName: "Malik",
    userName: "malik",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    image_content: "",
    datePost: 15,
    likes: 100,
    replies: 9,
  },
  {
    avatar: "https://source.unsplash.com/1kU3F0v90NY",
    profileName: "Eulaa",
    userName: "eula",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquid fugiat obcaecati nihil nulla commodi harum incidunt provident impedit quibusdam.",
    image_content: "",
    datePost: 25,
    likes: 530,
    replies: 120,
  },
];

export default function MainContent() {
  return (
    <>
      <PostInput />
      {/* content */}

      {ContentDummy.map((content, index) => (
        <ContentSpace
          key={index}
          avatar={content.avatar}
          profileName={content.profileName}
          userName={content.userName}
          content={content.content}
          image_content={content.image_content}
          datePost={content.datePost}
          likes={content.likes}
          replies={content.replies}
        />
      ))}
    </>
  );
}
