import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <h1>
        Welcome to the <strong>collab-notes</strong> app!
      </h1>
      <dl>
        <dt>
          <em>collab-notes</em>
        </dt>
        <dd>
          <ul>
            <li>
              collab-notes is a simple app that allows users to create and edit
              notes along with other users. The <em>owner</em> of a particular
              note can share it with any number of
              <em>collaborators</em> of their choosing.
            </li>
            <li>
              The <em>owner</em> can also set, revoke, or modify the read and
              write permissions of each <em>collaborator</em> at any time.
            </li>
            <li>
              The app supports <em>plaintext</em> or <em>Markdown</em> formats.
            </li>
          </ul>
        </dd>
      </dl>
      <Link href={"/login"}>
        <span>Log in</span>
        <ArrowRightIcon className="size-4 inline" />
      </Link>
    </main>
  );
}
