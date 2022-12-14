import Link from "next/link";
import Image from "next/image";
import styles from "@styles/EventItem.module.css";

export const EventItem = ({ evt }) => {
  console.log(evt);
  return (
    <div className={styles.event}>
      <div className={evt.img}>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};
