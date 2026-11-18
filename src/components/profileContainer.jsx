import ProfileCard from "./profileCard.jsx";

export default function ProfileContainer() {
  return (
    <section>
      <h1>User Profiles</h1>

      <ProfileCard
        name="Alex"
        age={25}
        bio="A software engineer who loves hiking."
      />

      <ProfileCard
        name="Taylor"
        age={30}
        bio="A designer who enjoys photography."
      />
    </section>
  );
}