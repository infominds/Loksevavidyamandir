import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image, Strong, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack, Formspree } from "@quarkly/components";
import { MdArrowDownward, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="--headline2"
				md-font="--headline3"
				color="#f02107"
			>
				Lokseva Vidya Mandir & Junior College{"\n\n"}
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
				<Override slot="link-404">
					<Link href="https://quarkly.io/preview#/teacher">
						Teacher
					</Link>
					{" "}
				</Override>
				<Override slot="link-teacher">
					<Link href="https://quarkly.io/preview#/404">
						Gallery
					</Link>
					{"\n\n"}
				</Override>
				<Override slot="link-index">
					Contact
				</Override>
			</Menu>
		</Section>
		<Section />
		<Section
			background="--color-darkL2 url(https://images.unsplash.com/photo-1594027386703-9543cc30dae9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" color="--dark">
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image width="340px" height="240px" src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" />
					<Image width="340px" height="240px" src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000" position="sticky" />
				</StackItem>
				<StackItem width="66.66%" md-width="100%">
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0" color="#f02107">
								CERTIFIED TEACHERS
								<br />
								{"\n\n"}
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--darkL2">
								At Lokseva vidya mandir school teachers ability to deal with children, their thought process and their understanding of child psychology. Furthermore, This ensures that each student gets the benefit of personalized attention from highly qualified and trained tutors, who have been chosen for their dedication, competence and compassion that has made the school a role model for other institutions.we maintains the standard we prescribe for our teachers.
								<br />
								{"\n\n"}
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0" color="#f02107">
								EDUCATION{"\n\n"}
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--darkL2">
								The management, staff and students are committed to this aim and work tirelessly to obtain the excellence in the academics, co-curricular, extra-curricular areas and be happily productive in their lives. The aim of the school is to provide depth based knowledge adapting new technology. We have rated ourselves as the toppers in the district to reach the heights in the field of education. We providing the advanced knowledge based education, We maintain healthy teaching learning relationship.
								<br />
								{"\n\n"}
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0" color="#f02107">
								BOOK & LIBRARY{"\n\n"}
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--darkL2">
								Since the very first exposure to a child is through the visual medium and the written word, the school has created a friendly world of knowledge. The library where a wide range of books, comics, textbooks, encyclopedia, novels, expose children of all ages to a fascinating world. The reading habit is encouraged in the libraries cheerful, neat and spacious environs, where children learn to relax and enjoy reading.
								<br />
								{"\n\n"}
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0" color="#f02107">
								INFRASTRUCTURE
								<br />
								{"\n\n"}
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--darkL2">
								The school building has been specially designed to give it a contemporary, stylish look. The classrooms are well ventilated with black boards to provide an ideal sanctum for academic progress to take place. Each class has a maximum of 60 pupils. The school has excellent infrastructure viz, air cooled school building, vast playground and spacious classroom.
								<br />
								{"\n\n"}
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
						height="990px"
					/>
					<Text
						as="h4"
						margin="12px 0"
						font="--headline1"
						color="--red"
						letter-spacing="1px"
						text-transform="uppercase"
						text-align="center"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							About Us{"\n\n"}
						</Strong>
					</Text>
					<Text
						as="h2"
						margin="12px 0"
						font="--lead"
						md-font="--headline3"
						color="#0a0909"
					>
						Lokseva Vidya Mandir & Junior College comprises of pre-primary section,Primary section,Higher secondary and Jr.College. The school follows Maharashtra State Board Curriculum and the medium of instruction is Marathi for School and junior college have three main stream i.e. Science,Commerce & Arts
						<br />
						{"\n\n"}
					</Text>
					<Text
						as="h2"
						margin="12px 0 12px 0"
						font="normal 300 18px/1.5 --fontFamily-sans"
						md-font="--headline3"
						color="#0a0909"
						text-align="left"
						padding="px 0 0px 0px"
						text-transform="uppercase"
					>
						Maharashtra State Board Pattern based curriculum.
						<br />
						Value based education by qualified experienced and dedicated staff.
						<br />
						Aims at maximum participation for the maximum number of students in a wide range of co-curricular activities.
						<br />
						Special emphasis on all-round development on students personality.
						<br />
						Self secure and soothing learning environment for the children.
						<br />
						Excellent infrastructure viz, air cooled school building, vast playgrounds, spacious classroom.
						<br />
						Well stocked library, well equipped science and computer labs, remedial classes for weak students{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://images.unsplash.com/photo-1542899435-95e8b1563695?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center/cover" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Override slot="SectionContent" />
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				color="#f02107"
			>
				Key Members
			</Text>
			<Text
				as="p"
				color="--darkL2"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/birajdar%20shivsharan.png?v=2020-11-27T04:45:06.170Z) 50% 0/cover no-repeat"
						hover-box-shadow="4px -4px 8px 1px #c83d04"
					/>
					<Text color="--dark" margin="0">
						<Strong>
							PRESIDENT
						</Strong>
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f02107">
						SHRI.SHIVSHARAN H. BIRAJDAR-PATIL
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/MHETRE.png?v=2020-11-27T04:45:19.117Z) 50% 0/cover no-repeat"
						hover-box-shadow="4px -4px 8px 1px #c83d04"
						border-color="#0d0e0f"
					/>
					<Text color="--dark" margin="0">
						<Strong>
							SECRETARY
						</Strong>
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f02107">
						SHRI.GURUSIDDH PIRAPPA MHETRE
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/PIRAPPA.png?v=2020-11-27T04:45:19.121Z) 50% 0/cover no-repeat"
						hover-box-shadow="4px -4px 8px 1px #c83d04"
					/>
					<Text color="--dark" margin="0">
						<Strong>
							ASSISTANT SECRETARY
						</Strong>
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f02107">
						SHRI.PIRAPPA GURUSIDDH MHETRE
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/SHRI.S.V.TELE.png?v=2020-11-27T04:45:19.119Z) 50% 0/cover no-repeat"
						hover-box-shadow="4px -4px 8px 1px #c83d04"
					/>
					<Text color="--dark" margin="0">
						<Strong>
							PRINCIPAL
						</Strong>
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f02107">
						SHRI.S.V.TELE
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						<br />
						This space is 100% editable. Use it to introduce a team member, describe their work experience and role within the company. This is also a great place to highlight a team member's strong sides.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h2"
				font="--headline2"
				md-font="--headline3"
				margin="0"
				text-align="center"
				color="#f02107"
			>
				Academic Toppers
			</Text>
			<Stack>
				<StackItem width="50%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" />
					<Stack>
						<StackItem sm-width="100%" padding="16px 16px 16px px" width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/ASHFIYA%20SHAIKH.png?v=2020-11-27T04:49:35.024Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0" color="#f02107">
								ASHFIYA SHAIKH
							</Text>
							<Text color="--darkL2" margin="0">
								H.S.C.TOPPER FROM SCIENCE FACULTY : 85.38% YEAR 2020
							</Text>
						</StackItem>
						<StackItem sm-width="100%" padding="16px 16px 16px px" width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/SNEHAL%20KHYADE.png?v=2020-11-27T04:49:35.188Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0" color="#f02107">
								SNEHAL KHYADE
							</Text>
							<Text color="--darkL2" margin="0">
								H.S.C.TOPPER FROM COMMERCE FACULTY : 84.76% YEAR 2020
							</Text>
						</StackItem>
						<StackItem sm-width="100%" padding="16px 16px 16px px" width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/SHIVANGI%20ARJUN.png?v=2020-11-27T06:04:35.690Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0" color="#f02107">
								SHIVANGI ARJUN{"\n\n"}
							</Text>
							<Text color="--darkL2" margin="0">
								H.S.C. SECOND TOPPER FROM COMMERCE FACULTY : 78.76% YEAR 2020{"\n\n"}
							</Text>
						</StackItem>
						<StackItem sm-width="100%" padding="16px 16px 16px px" width="50%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/BHAGYASHREE%20JAKUNE.png?v=2020-11-27T06:04:35.692Z) 50% 0/cover no-repeat"
								border-radius="50%"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0" color="#f02107">
								BHAGYASHREE JAKUNE{"\n\n"}
							</Text>
							<Text color="--darkL2" margin="0">
								H.S.C.SECOND TOPPER FROM ARTS FACULTY : 82.62% YEAR 2020{"\n\n"}
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem
					sm-width="100%"
					height="405px"
					min-width="16px"
					min-height="16px"
					padding="16px 16px 16px px"
					width="25%"
				>
					<Override
						slot="StackItemContent"
						background="--color-lightD1"
						padding="20px"
						flex-direction="column"
						min-height="100px"
						height="373px"
					/>
					<Box
						width="170px"
						height="170px"
						margin="0 auto"
						background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/AKASH%20KORALI.png?v=2020-11-27T04:49:35.195Z) 50% 0/cover no-repeat"
						border-radius="50%"
					/>
					<Text
						as="h3"
						font="--headline3"
						margin="20px 0 5px 0"
						color="#f02107"
						text-align="center"
					>
						AKASH{" "}
						<br />
						KORALI
						<br />
						{"\n\n"}
					</Text>
					<Text color="--darkL2" margin="0" text-align="center">
						H.S.C.TOPPER FROM{" "}
						<br />
						ARTS FACULTY :{" "}
						<br />
						84% YEAR 2020{"\n\n"}
					</Text>
				</StackItem>
				<StackItem
					sm-width="100%"
					height="405px"
					min-width="16px"
					min-height="16px"
					padding="16px 16px 16px px"
					width="25%"
				>
					<Override
						slot="StackItemContent"
						background="--color-lightD1"
						padding="20px"
						flex-direction="column"
						min-height="100px"
						height="373px"
					/>
					<Box
						width="170px"
						height="170px"
						margin="0 auto"
						background="url(https://uploads.quarkly.io/5fbe80b5b83a2f001f2e3602/images/VARSHA%20MOGLAI.png?v=2020-11-27T06:04:35.697Z) 50% 0/cover no-repeat"
						border-radius="50%"
					/>
					<Text
						as="h3"
						font="--headline3"
						margin="20px 0 5px 0"
						color="#f02107"
						text-align="center"
					>
						VARSHA
						<br />
						MOGLAI{"\n\n"}
						<br />
						{"\n\n"}
					</Text>
					<Text color="--darkL2" margin="0" text-align="center">
						<br />
						H.S.C. SECOND TOPPER FROM SCIENCE FACULTY : 81.38% YEAR 2020{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section color="--light" padding="100px 0" sm-padding="40px 0" position="relative">
			<Stack>
				<StackItem width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdLocationOn}
							color="#173553"
						/>
						<Text as="h4" margin="6px 0" font="--base" color="#000000">
							Visit us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3" color="#150c0c">
							Lokseva Vidya Mandir & Junior College,Mandrup,Tal.South Solapur,Dist-Solapur
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="64px 0 0 0"
						max-width="360px"
						position="relative"
					>
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdEmail}
							color="#173553"
						/>
						<Text as="h4" margin="6px 0" font="--base" color="#080808">
							Email us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3">
							<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="#150c0c">
								hmloksevavidyamandir@gmail.com{"\n\n"}
							</Link>
						</Text>
					</Box>
					<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
						<Icon
							position="absolute"
							size="48px"
							top="0"
							left="0"
							category="md"
							icon={MdPhone}
							color="#173553"
						/>
						<Text as="h4" margin="6px 0" font="--base" color="#0b0b0b">
							Call us
						</Text>
						<Text as="p" margin="6px 0" font="--headline3" color="#150c0c">
							+91 9420490054
							<br />
							{"        "}9923350050{"\n\n"}
						</Text>
					</Box>
					<Box
						padding="0 0 0 64px"
						sm-padding="0"
						margin="48px 0"
						max-width="360px"
						position="relative"
						display="flex"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="#173553"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaTwitter}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="#173553"
							border-radius="50%"
						/>
						<Icon
							category="fa"
							icon={FaLinkedinIn}
							width="48px"
							height="48px"
							size="24px"
							margin-right="16px"
							background="#173553"
							border-radius="50%"
						/>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Box
						max-width="360px"
						padding="56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="rgba(200, 61, 4, 0.83)"
					>
						<Text as="h3" font="--headline3" margin="0 0 20px 0">
							Leave us message
						</Text>
						<Formspree>
							<Stack gap="16px">
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Name
									</Text>
									<Input width="100%" name="name" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</StackItem>
								<StackItem width="100%">
									<Override slot="StackItemContent" flex-direction="column" />
									<Text font="--base" margin="0 0 4px 0">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</StackItem>
								<StackItem width="100%">
									<Button background="--color-dark">
										Send
									</Button>
								</StackItem>
							</Stack>
						</Formspree>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" background="rgba(239, 75, 6, 0.5)">
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--light"
				hover-color="--primary"
			>
				<Strong>
					Copyright ©{" "}
				</Strong>
				infominds 
All rights reserved 2021
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});