import { Hero, WorkSlider } from "@/components";
import styles from "./styles.module.css";
import { Title, Box } from '@mantine/core';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.work}>
        <Title order={2} className={styles.title}>
          Our Work
        </Title>
        <Box className={styles.slider}>
          <WorkSlider />
        </Box>
      </section>
    </main>
  );
}
