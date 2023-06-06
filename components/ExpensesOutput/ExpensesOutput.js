import { StyleSheet, View, Text } from 'react-native';

import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';



function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {

    let content = <Text style={styles.inforText}>{fallbackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }
    // console.log('------', expenses);
    return (
        <View style={styles.container}>
            {/* Bản tóm tắt : Summary */}
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {/* Danh sách chi phí */}
            {content}
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    },
    inforText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
        fontWeight: 'bold'
    }
});