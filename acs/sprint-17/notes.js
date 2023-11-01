// Linked Lists II

function solution(head, value, index) {

	let n = new ListNode(value)

	// insert an empty list
	if (head == null) {
		return n;
	}

	// insert at the head of the list
	if (index == 0) {
		n.next = head;
		return n;
	}

	// insert in the middle of the list
	let prev = head;
	let cur = head.next;
	let cur_index = 1;

	while(cur != null) {
		if(cur_index == index) {
			prev.next = n;
			n.next = cur;
			return head;
		}
		prev = prev.next;
		cur = cur.next;
		cur_index++;
	}

	// insert at the tail of the list
	prev.next = n;

	return head;
}

