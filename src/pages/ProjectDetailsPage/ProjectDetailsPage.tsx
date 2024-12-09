import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../assets/data/projects';
import FactCard from '../../components/FactCard/FactCard';
import MaxWidthContainer from '../../components/MaxWidthContainer/MaxWidthContainer';
import HeadingSection from '../../components/UI/HeadingSection/HeadingSection';
import IconWrapper from '../../components/UI/IconWrapper/IconWrapper';
import useDynamicIcon from '../../hooks/useDynamicIcon';
import Footer from '../../components/Footer/Footer';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  
  const project = projects.find((p) => p.id === Number(id));
  const { name, fullDescription, facts, subheading, subdescription, bgImage, features, imageName } = project || {};
  const imageSrc = useDynamicIcon(imageName || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (!project) {
    return <div></div>;
    
  }

  if (project) {
    return (
      <div
        style={{
          backgroundImage: "url('/project-details-bg.png')",
        }}
      >
        <MaxWidthContainer>
          <div className="mb-8 md:mb-12 lg:mb-16 w-full flex flex-col gap-12 md:gap-16 lg:gap-24 min-h-screen">
            <div className='flex flex-col-reverse lg:flex-row items-center gap-8'>
              <div className='flex flex-col gap-6'>
                <h1 data-aos="fade-right" className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white'>{name}</h1>
                <p data-aos="fade-right" data-aos-delay={300} className="text-secondaryText text-base sm:text-lg leading-[140%]">{fullDescription}</p>
              </div>
  
              <div
                style={{
                  backgroundImage: `url('/${bgImage}')`,
                }}
                className='h-[100vh] max-h-[650px] lg:max-h-[800px] min-w-[50vw] w-full bg-cover bg-no-repeat bg-right flex flex-col justify-center items-center gap-16 lg:-mr-20'
              >
                <h3 className='max-w-[570px] font-bold text-baseText text-xl md:text-2xl lg:text-3xl leading-[130%]'>Key functionality</h3>
                <div className='max-w-[570px] flex flex-col gap-12'>
                  <div className='flex flex-col gap-6 items-center'>
                    {features?.map((feat, index) => <>
                      <div key={index} className='flex flex-col gap-6 items-center'>
                        <IconWrapper iconName="target-icon.svg" />
                        <p className='text-baseText text-lg md:text-xl lg:text-2xl text-center font-semibold leading-[130%]'>{feat.title}</p>
                        <span className='text-baseGray text-base lg:text-lg text-center leading-[130%]'>{feat.description}</span>
                      </div>
                    </>)}
                  </div>
                </div>
              </div>
            </div>
  
            <div className='flex flex-col lg:flex-row gap-8 justify-between'>
              <div className="max-w-[670px] flex flex-col gap-2 sm:gap-4 md:gap-6">
                <HeadingSection>{subheading}</HeadingSection>
                <p data-aos="fade-right" data-aos-delay={300} className="text-secondaryText text-base sm:text-lg leading-[140%]">{subdescription}</p>
                {imageSrc && <img className='w-full h-fit object-cover' src={imageSrc} alt="project poster" draggable={false} />}
              </div>
  
              <div className='max-w-[470px] flex flex-col gap-12'>
                {facts?.map((fact, index) => <FactCard key={index} index={index} title={fact.title} description={fact.description} />)}
              </div>
            </div>
          </div>
        </MaxWidthContainer>

        <Footer />
      </div>
    );
  }
};

export default ProjectDetailsPage;