import React from "react";

interface FamilyMember {
  name: string;
  spouse?: { name: string };
  children?: FamilyMember[];
}

const familyTree: FamilyMember = {
  name: "John",
  spouse: { name: "Mary" },
  children: [
    {
      name: "Jane",
      children: [{ name: "Alice" }, { name: "Bob" }],
    },
    {
      name: "Michael",
      children: [{ name: "Chris" }],
    },
    {
      name: "Jane",
      children: [{ name: "Alice" }, { name: "Bob" }],
    },
  ],
};

interface FamilyMemberProps {
  member: FamilyMember;
}

const FamilyMemberComponent: React.FC<FamilyMemberProps> = ({ member }) => {
  return (
    <li>
      {member.name}
      {member.spouse && (
        <div>
          <img width={50} height={50} src="/mother.webp" alt="mother" />
          <FamilyMemberComponent member={member.spouse} />
        </div>
      )}
      {member.children && (
        <>
          <ul>
            {member.children.map((child, index) => (
              <>
                <img width={50} height={50} src="/child.webp" alt="child" />
                <FamilyMemberComponent key={index} member={child} />
              </>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

interface FamilyTreeProps {
  data: FamilyMember;
}

function FamilyTree({ data }: FamilyTreeProps) {
  return (
    <ul>
      <img width={50} height={50} src="/father.webp" alt="father" />
      <FamilyMemberComponent member={data} />
    </ul>
  );
}

export default function FamilyTreePage() {
  return (
    <div>
      <h1>Family Tree</h1>
      <FamilyTree data={familyTree} />
    </div>
  );
}
