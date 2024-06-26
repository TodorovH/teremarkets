import styles from './SolutionsDescriptionSection.module.css';

function SolutionsDescriptionSection() {
  return (
    <section className={styles.descriptionSectionContainer}>
      <div className={styles.descriptionSectionInnerContainer}>
        <p>
          Teremarkets D2C solutions are performance-based for a reason. Every
          marketing initiative, regardless of its purpose or goal, needs to be
          executed.
        </p>
        <p>
          At Teremarkets, we are pioneers dedicated to creating new paths of
          success for every company and partner we serve. With a culture of
          performance and a drive to stay at the forefront of the industry, we
          continue to shape the future of performance marketing by helping
          businesses thrive in the digital age.
        </p>
      </div>
    </section>
  );
}

export default SolutionsDescriptionSection;
