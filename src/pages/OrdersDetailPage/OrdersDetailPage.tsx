// Import Assets

// Import Library

// Import Framework

// Import Components
import { FormContainer } from "components/FormContainer/FormContainer"

// Import Pages

// Import Store

// Import Style
import styles from "./OrdersDetailPage.module.css"

// Import Hooks

// Import Utils

// Import Types
import { FC } from "react"
type Props = {
	children: React.ReactNode
}

export const OrdersDetailPage: FC<Props> = ({ children }) => {
	return <FormContainer extraClass={styles.detail}>{children}</FormContainer>
}
