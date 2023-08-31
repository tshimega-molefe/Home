import { FC } from "react"
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components"

interface ContactEmailProps {
  name: string
  message: string
  company: string
  number: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""

const ContactEmail: FC<ContactEmailProps> = ({
  name,
  message,
  company,
  number,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Consultation Enquiry</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/public/icon.png`}
              width="120"
              height="36"
              alt="Swift Stack"
            />
          </Section>
          <Heading style={h1}>Consultation Enquiry</Heading>
          <Text style={heroText}>
            Dear Mr Molefe, I trust this message finds you well. My name is{" "}
            {name}, and I represent {company}.
          </Text>

          <Section style={codeBox}>
            <Text style={text}>{message}</Text>
          </Section>

          <Text style={text}>
            Warm regards,
            <br />
            <br />
            {name}
            <br />
            {company}
            <br />
            {number}
          </Text>

          <Section>
            <Row style={footerLogos}>
              <Column style={{ width: "66%" }}>
                <Img
                  src={`${baseUrl}/public/icon.png`}
                  width="120"
                  height="36"
                  alt="Swift Stack"
                />
              </Column>
              <Column>
                <Row>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`${baseUrl}/public/icon.png`}
                        width="32"
                        height="32"
                        alt="Swift Instagram"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`${baseUrl}/public/icon.png`}
                        width="32"
                        height="32"
                        alt="Swift GitHub"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`${baseUrl}/public/icon.png`}
                        width="32"
                        height="32"
                        alt="Swift LinkedIn"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section>
            <Link
              style={footerLink}
              href="https://slackhq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our blog
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://slack.com/legal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Policies
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://slack.com/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help center
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://slack.com/community"
              target="_blank"
              rel="noopener noreferrer"
              data-auth="NotApplicable"
              data-linkindex="6"
            >
              Swift Stack Community
            </Link>
            <Text style={footerText}>
              ©2023 Swift Stack, Pty (Ltd), an LSJ company. <br />
              11 Christiaan Barnard Street, Cape Town, WC 8001, ZAR <br />
              <br />
              All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default ContactEmail

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
}

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
}

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
}

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
}

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}

const container = {
  maxWidth: "600px",
  margin: "0 auto",
}

const logoContainer = {
  marginTop: "32px",
}

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
}

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
}

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginRight: "50px",
  marginBottom: "30px",
  padding: "43px 23px",
}

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center" as const,
  verticalAlign: "middle",
}

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
}
