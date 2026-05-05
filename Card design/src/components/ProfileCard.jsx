import React, { use } from "react";
import { Heart, MessageSquare, Eye } from "lucide-react";

const ProfileCard = () => {
  const users = [
    {
      fullName: "Ibnu Araabi",
      username: "aarav.dev",
      image:
        "https://ui-avatars.com/api/?name=Ibnu+Araabi&background=0D8ABC&color=fff",
      coverImage: "https://picsum.photos/id/1015/800/300",
      likes: 1240,
      posts: 86,
      views: 15400,
      description:
        "Frontend developer who loves building clean and interactive UI.",
    },
    {
      fullName: "Fatima Noor",
      username: "fatima.codes",
      image:
        "https://ui-avatars.com/api/?name=Fatima+Noor&background=1E40AF&color=fff",
      coverImage: "https://picsum.photos/id/1016/800/300",
      likes: 980,
      posts: 64,
      views: 12000,
      description: "JavaScript enthusiast focused on modern web development.",
    },
    {
      fullName: "Abdur Rahim Khan",
      username: "rahim.dev",
      image:
        "https://ui-avatars.com/api/?name=Abdur+Rahim+Khan&background=047857&color=fff",
      coverImage: "https://picsum.photos/id/1020/800/300",
      likes: 1430,
      posts: 102,
      views: 18900,
      description: "Full stack developer exploring new technologies every day.",
    },
    {
      fullName: "Sophia Lee",
      username: "sophia.ui",
      image:
        "https://ui-avatars.com/api/?name=Sophia+Lee&background=7C3AED&color=fff",
      coverImage: "https://picsum.photos/id/1024/800/300",
      likes: 2100,
      posts: 150,
      views: 25000,
      description: "UI designer who loves minimal and modern design systems.",
    },
    {
      fullName: "Hasan Mahmud",
      username: "hasan.js",
      image:
        "https://ui-avatars.com/api/?name=Hasan+Mahmud&background=DC2626&color=fff",
      coverImage: "https://picsum.photos/id/1035/800/300",
      likes: 870,
      posts: 55,
      views: 9800,
      description: "Learning JavaScript and building small projects every day.",
    },
    {
      fullName: "Emily Watson",
      username: "emily.dev",
      image:
        "https://ui-avatars.com/api/?name=Emily+Watson&background=EA580C&color=fff",
      coverImage: "https://picsum.photos/id/1040/800/300",
      likes: 1760,
      posts: 120,
      views: 22000,
      description:
        "Passionate about React and creating smooth user experiences.",
    },
    {
      fullName: "Nusrat Jahan",
      username: "nusrat.codes",
      image:
        "https://ui-avatars.com/api/?name=Nusrat+Jahan&background=0891B2&color=fff",
      coverImage: "https://picsum.photos/id/1045/800/300",
      likes: 1120,
      posts: 78,
      views: 14000,
      description: "Aspiring developer focusing on problem solving skills.",
    },
    {
      fullName: "Adam",
      username: "adam.dev",
      image:
        "https://ui-avatars.com/api/?name=Adam&background=4F46E5&color=fff",
      coverImage: "https://picsum.photos/id/1050/800/300",
      likes: 1980,
      posts: 132,
      views: 27000,
      description: "Tech lover sharing knowledge about web and software.",
    },
    {
      fullName: "Tanvir Ahmed",
      username: "tanvir.dev",
      image:
        "https://ui-avatars.com/api/?name=Tanvir+Ahmed&background=16A34A&color=fff",
      coverImage: "https://picsum.photos/id/1060/800/300",
      likes: 950,
      posts: 60,
      views: 11000,
      description: "Frontend learner trying to master modern frameworks.",
    },
    {
      fullName: "Ahmad Jabir",
      username: "ahmad.dev",
      image:
        "https://ui-avatars.com/api/?name=Ahmad+Jabir&background=BE185D&color=fff",
      coverImage: "https://picsum.photos/id/1065/800/300",
      likes: 2300,
      posts: 160,
      views: 30000,
      description:
        "Creative designer focused on clean and user friendly layouts.",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {users.map((user, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: "300px",
              borderRadius: "24px",
              overflow: "visible",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              position: "relative",
              paddingBottom: "60px",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={user.coverImage}
                alt="cover"
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "24px 24px 0 0",
                }}
              />
              <button
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                +
              </button>

              <div
                style={{
                  position: "absolute",
                  bottom: "-45px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    padding: "3px",
                    background:
                      "conic-gradient(red, orange, yellow, green, blue, violet, red)",
                  }}
                >
                  <img
                    src={user.image}
                    alt={user.fullName}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid white",
                      zIndex: 1,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-14 text-center px-4">
              <h2 className="text-lg font-bold text-gray-900">
                {user.fullName}
              </h2>
              <p className="text-sm text-gray-400">@{user.username}</p>
            </div>

            {/* Description */}
            <div className="mt-2 text-center px-5">
              <p className="text-sm text-gray-500 leading-relaxed">
                {user.description}
              </p>
            </div>

            <div
              className="mx-4 mt-4 rounded-2xl px-4 py-3 flex justify-between items-center 
  bg-linear-to-r from-violet-500/20 via-pink-500/20 to-orange-400/20 
  backdrop-blur-md border border-white/40 
  shadow-[0_4px_20px_rgba(168,85,247,0.25)]"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-base font-extrabold bg-linear-to-b from-violet-600 to-pink-500 bg-clip-text text-transparent">
                  {user.likes}
                </h1>
                <p className="text-xs font-medium text-gray-400 mt-0.5 tracking-wide uppercase">
                  Likes
                </p>
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-linear-to-b from-violet-300 to-pink-300 opacity-50" />

              <div className="flex flex-col items-center">
                <h1 className="text-base font-extrabold bg-linear-to-b from-pink-500 to-orange-400 bg-clip-text text-transparent">
                  {user.posts}
                </h1>
                <p className="text-xs font-medium text-gray-400 mt-0.5 tracking-wide uppercase">
                  Posts
                </p>
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-linear-to-b from-pink-300 to-violet-600 opacity-50" />

              <div className="flex flex-col items-center">
                <h1 className="text-base font-extrabold bg-linear-to-b from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {user.views}
                </h1>
                <p className="text-xs font-medium text-gray-400 mt-0.5 tracking-wide uppercase">
                  Views
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCard;
