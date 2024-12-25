def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
    missing = {}
    extra = {}

    receivedCount = {}
    for gift in received:
        receivedCount[gift] += 1

    for gift in expected:
        if receivedCount[gift]:
            receivedCount[gift] -= 1
            continue
        missing[gift] += 1

    # Remaining gifts in count are extra
    for gift in receivedCount:
        if receivedCount[gift] > 0:
            extra[gift] = receivedCount[gift]

    return {"missing": missing, "extra": extra}
