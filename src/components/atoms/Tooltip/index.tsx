import ReactPowerTooltip from 'react-power-tooltip'
import { TooltipProps } from 'react-power-tooltip/ToolTip'
import { useTheme } from '../../../library/theme'

const Tooltip: React.FC<TooltipProps> = ({ show, ...rest }) => {
    const { theme } = useTheme()

    return (
        <ReactPowerTooltip
            animation="fade"
            arrowAlign="end"
            backgroundColor={theme.colors.background.secondary}
            color={theme.colors.text.primary}
            flat
            fontSize="10pt"
            hoverBackground={theme.colors.background.secondary}
            lineSeparated={`1px solid ${theme.colors.border}`}
            moveDown="10px"
            moveLeft="10px"
            position="bottom end"
            show={show}
            {...rest}
        />
    )
}

export default Tooltip
