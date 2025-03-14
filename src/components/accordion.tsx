import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
 function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-[90%]">
        <p className="font-bold text-[45px] text-[#272643] text-center m-[50px]">FAQ</p>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is ParaLearn?</AccordionTrigger>
          <AccordionContent>
          ParaLearn is a Learning Management System (LMS) designed specifically for Africans. It provides a platform for users to access a wide range of courses, educational materials, and resources to enhance their skills and knowledge. Whether you're a student, professional, or lifelong learner, ParaLearn offers tools to help you achieve your educational goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> How do I get started?</AccordionTrigger>
          <AccordionContent>
          Getting started with ParaLearn is simple:

Visit the ParaLearn website.

Sign up for a free account by providing your basic details (e.g., name, email, and password).

Explore the available courses and materials.

Upgrade to a premium account (if needed) to access exclusive courses and features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do I need to pay before becoming a user?</AccordionTrigger>
          <AccordionContent>
          No, you do not need to pay to become a user. You can create a free account and start exploring ParaLearn immediately. However, to access premium courses and advanced materials, you will need to upgrade your account to a paid plan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What are the requirements needed to become an instructor?</AccordionTrigger>
          <AccordionContent>
          To become an instructor on ParaLearn, you typically need:

Expertise in a specific field: You should have in-depth knowledge or professional experience in the subject you wish to teach.

Educational materials: Prepare course content, such as videos, slides, PDFs, or quizzes.

Approval: Submit your application to ParaLearn for review. Once approved, you can start creating and uploading courses.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Can I download materials for offline use?</AccordionTrigger>
          <AccordionContent>
          Yes, ParaLearn allows users to download course materials for offline use, depending on the course and the instructor's settings. However, some materials may only be accessible online to protect intellectual property rights. Check the course details for download options.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }

  export default AccordionDemo
  